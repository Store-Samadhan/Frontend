import React, { useMemo, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilePond, registerPlugin } from "react-filepond";

import styles from "./PersonalInfoSec.module.css";

import { PROFILE_DATA } from "../../../../Utils/Constants/StaticData";

import Button from "./../../../Button";

import { ReactComponent as PlusImg } from "../../../../Assets/Profile/Plus.svg";
import EditableTable from "./../../../Table/EdiableTable";
import notify from "./../../../../Utils/Helpers/notifyToast";

function PersonalInfoSec() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [localeUserData, setLocaleUserData] = useState({ ...userData });

  const [tableData, setTableData] = useState([]);
  const [columsData, setColumsData] = useState([
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Price per box",
      accessor: "price",
    },
  ]);

  const columnNameRef = useRef(null);
  const tagsWrapperRef = useRef(null);
  const [files, setFiles] = useState([]);

  const updateMyData = (rowIndex, columnId, value) => {
    setTableData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const resetData = () => {
    setLocaleUserData({ ...userData });
    // setColumsData(userData.pricing ? [...userData.pricing.columns] : []);
    setTableData(userData.pricing ? [...userData.pricing.data] : []);
    setFiles(
      userData.images
        ? userData.images.map((image) => {
            return {
              source: image,
              options: {
                type: "local",
              },
            };
          })
        : []
    );
  };

  useEffect(() => {
    resetData();
  }, [userData]);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  useEffect(() => {
    if (tagsWrapperRef.current) {
      let noOfTags = tagsWrapperRef.current.childElementCount;
      tagsWrapperRef.current.childNodes.forEach((node, index) => {
        if (index !== noOfTags - 1) {
          node.style.width = `${node.value.length + 3}ch`;
        }
      });
    }
  }, [userData, localeUserData.tags?.length]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.TopSec}>
        <h3 className={styles.Title}>{PROFILE_DATA.personalInfoSec.title}</h3>
        <div className={styles.Buttons}>
          <Button
            name={PROFILE_DATA.personalInfoSec.discard}
            onClick={() => {
              resetData();
            }}
            primaryColor="var(--ter-black)"
            wrapperClass={styles.UpdateBtn}
            empty
          />
          <Button
            name={PROFILE_DATA.personalInfoSec.update}
            onClick={() => {
              notify("Profile Updated Successfully", "Success");
            }}
            primaryColor="var(--primary-orange)"
            wrapperClass={styles.UpdateBtn}
            inverted
          />
        </div>
      </div>

      <div className={styles.BottomSec}>
        {userData.isStorage && (
          <div className={styles.FileInputWrapper}>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              server="http://localhost:9090/images"
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              // onprocessfile={(err, file) => {
              //   console.log(err, file.serverId);
              // }}
            />
          </div>
        )}
        <div className={styles.KeyValuePairs}>
          {(localeUserData.isStorage
            ? PROFILE_DATA.personalInfoSec.feilds.slice(0, 4)
            : PROFILE_DATA.personalInfoSec.feilds.slice(0, 3)
          ).map((feild, index) => {
            return (
              <div className={styles.KeyValuePair} key={index}>
                <h4 className={styles.Key}>{feild.key}</h4>
                <input
                  className={styles.Value}
                  value={localeUserData[feild.value]}
                  onChange={(e) => {
                    setLocaleUserData({
                      ...localeUserData,
                      [feild.value]: e.target.value,
                    });
                  }}
                ></input>
              </div>
            );
          })}
        </div>
        {userData.isStorage && (
          <>
            <div className={styles.TagsSec}>
              <h4 className={styles.AddressTitle}>
                {PROFILE_DATA.personalInfoSec.tags}
              </h4>
              <div className={styles.Tags} ref={tagsWrapperRef}>
                {localeUserData.tags?.map((tag, index) => {
                  return (
                    <input
                      className={styles.Tag}
                      key={index}
                      value={tag}
                      onChange={(e) => {
                        e.target.style.width = `${e.target.value.length + 3}ch`;
                        setLocaleUserData({
                          ...localeUserData,
                          tags: [
                            ...localeUserData.tags.slice(0, index),
                            e.target.value,
                            ...localeUserData.tags.slice(index + 1),
                          ],
                        });
                      }}
                    />
                  );
                })}
                <Button
                  name={PROFILE_DATA.personalInfoSec.addTag}
                  onClick={() => {
                    setLocaleUserData({
                      ...localeUserData,
                      tags: localeUserData.tags
                        ? [...localeUserData.tags, ""]
                        : [""],
                    });
                  }}
                  primaryColor="var(--primary-orange)"
                  inverted
                  withIcon
                  IconComp={PlusImg}
                  iconClass={styles.TagPlusIcon}
                  wrapperClass={styles.AddTagWrapper}
                />
              </div>
            </div>
            <div className={styles.PricingSec}>
              <h4 className={styles.AddressTitle}>
                {PROFILE_DATA.personalInfoSec.pricing}
              </h4>
              <div className={styles.PricingTable}>
                {/* <div className={styles.AddColumn}>
                  <input
                    name={PROFILE_DATA.personalInfoSec.addColumn}
                    ref={columnNameRef}
                    className={styles.AddColumnInput}
                  />
                  <Button
                    name={PROFILE_DATA.personalInfoSec.addCol}
                    wrapperClass={styles.AddColumnBtn}
                    onClick={() => {
                      if (
                        !columnNameRef.current.value ||
                        columnNameRef.current.value.length < 1
                      ) {
                        notify("Please enter a valid column name", "error");
                        return;
                      }

                      if (
                        columsData
                          .map((column) => column.accessor)
                          .includes(
                            columnNameRef.current.value
                              .replace(/\s/g, "")
                              .toLowerCase()
                          )
                      ) {
                        notify("Column already exists", "error");
                        return;
                      }

                      setColumsData((old) => [
                        ...old,
                        {
                          Header: columnNameRef.current.value,
                          accessor: columnNameRef.current.value
                            .replace(/\s/g, "")
                            .toLowerCase(),
                        },
                      ]);

                      setTableData((old) =>
                        old.map((row) => {
                          return {
                            ...row,
                            [columnNameRef.current.value]: "",
                          };
                        })
                      );
                    }}
                    inverted
                    primaryColor={"var(--ter-black)"}
                    withIcon
                    IconComp={PlusImg}
                  />
                </div> */}
                <EditableTable
                  columns={columsData}
                  data={tableData}
                  setData={setTableData}
                  updateMyData={updateMyData}
                />
                <Button
                  name={PROFILE_DATA.personalInfoSec.addRow}
                  onClick={() => {
                    setTableData((old) => [
                      ...old,
                      {
                        ...columsData.reduce((acc, column) => {
                          acc[column.accessor] = "";
                          return acc;
                        }, {}),
                      },
                    ]);
                  }}
                  inverted
                  primaryColor={"var(--ter-black)"}
                  withIcon
                  IconComp={PlusImg}
                  wrapperClass={styles.AddRowBtn}
                />
              </div>
            </div>
          </>
        )}

        <div className={styles.AddressSec}>
          <h4 className={styles.AddressTitle}>
            {PROFILE_DATA.personalInfoSec.addresses}
          </h4>
          <div className={styles.AddressListWrapper}>
            {localeUserData.addresses?.map((address, index) => {
              return (
                <div className={styles.Address} key={index}>
                  <textarea
                    className={styles.AddressLine}
                    autoComplete="address-line1"
                    onChange={(e) => {
                      setLocaleUserData({
                        ...localeUserData,
                        addresses: [
                          ...localeUserData.addresses.slice(0, index),
                          {
                            ...localeUserData.addresses[index],
                            address: e.target.value,
                          },
                          ...localeUserData.addresses.slice(index + 1),
                        ],
                      });
                    }}
                    value={address.address}
                  />
                  <input
                    className={styles.Pincode}
                    maxLength={6}
                    autoComplete="postal-code"
                    onChange={(e) => {
                      setLocaleUserData({
                        ...localeUserData,
                        addresses: [
                          ...localeUserData.addresses.slice(0, index),
                          {
                            ...localeUserData.addresses[index],
                            pincode: e.target.value,
                          },
                          ...localeUserData.addresses.slice(index + 1),
                        ],
                      });
                    }}
                    value={address.pincode}
                  />
                </div>
              );
            })}
            <Button
              name="Add Address"
              primaryColor={`var(--ter-black)`}
              inverted
              hoverBgColor={`var(--white)`}
              wrapperClass={styles.AddAddressBtn}
              withIcon
              IconComp={PlusImg}
              onClick={() => {
                setLocaleUserData({
                  ...localeUserData,
                  addresses: localeUserData.addresses
                    ? [
                        ...localeUserData.addresses,
                        {
                          address: "",
                          pincode: "",
                        },
                      ]
                    : [{ address: "", pincode: "" }],
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoSec;
