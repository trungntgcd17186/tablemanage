import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Row, Select, Table } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import fetchData from "../api/index";
import "./index.css";

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

export default function TableContent() {
  const [datas, setDatas] = useState<any[]>([]);

  const [obj, setObj] = useState<any>({});

  const [shortTemp, setShortTemp] = useState<any>();
  const [contagion, setContagion] = useState<any>();
  const [emergency, setEmergency] = useState<any>();
  const [mileageSurcharge, setMileageSurcharge] = useState<any>();
  const [primaryQuote, setPrimaryQuote] = useState<any>();

  const selectionType = "checkbox";

  useEffect(() => {
    axios.get("https://tablemanage.herokuapp.com/table").then((response) => {
      setDatas(response.data);
    });
  }, []);

  const SelectRef = useRef<HTMLDivElement>(null);

  const columns = [
    {
      title: () => {
        return (
          <div style={{ textAlign: "center", height: "54px" }}>Quote ID</div>
        );
      },
      dataIndex: "key",
      key: "key",
      render(text: string) {
        return {
          props: {
            style: { color: "#008DFF" },
          },
          children: <span>{text}</span>,
        };
      },
      //Xử lý search theo ID
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search ID"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.key.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
              height: "54px",
            }}
          >
            Care Recipient Name
          </div>
        );
      },
      dataIndex: "care_recipient_name",
      key: "care_recipient_name",
      //Xử lý search theo Name
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search Name"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.care_recipient_name
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
            }}
          >
            Care Recipient DOB
            <DatePicker />
          </div>
        );
      },
      dataIndex: "care_recipient_dob",
      key: "care_recipient_dob",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "80px",
              textAlign: "center",
              height: "54px",
            }}
          >
            Hour Rate
          </div>
        );
      },
      dataIndex: "rate",
      key: "rate",
      render(text: number) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
            ref={SelectRef}
          >
            Short Term
            <Select onChange={handleChangeShortTerm}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "short_temp",
      key: "short_temp",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
          >
            Contagion
            <Select onChange={handleChangeContagion}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "contagion",
      key: "contagion",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
          >
            Emergency
            <Select onChange={handleChangeShortTerm}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "emergency",
      key: "emergency",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "130px",
              textAlign: "center",
            }}
          >
            Mileage Surcharge
            <Select onChange={handleChangeShortTerm}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "mileage_surcharge",
      key: "mileage_surcharge",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "105px",
              textAlign: "center",
            }}
          >
            Primary Quote
            <Select onChange={handleChangeShortTerm}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "primary_quote",
      key: "primary_quote",
      render(text: boolean) {
        return {
          props: {
            style: {
              color: text === true ? "#008DFF" : "red",
              textAlign: "center",
            },
          },
          children: <span>{text === true ? "YES" : "NO"}</span>,
        };
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              width: "150px",
              textAlign: "center",
            }}
          >
            Start Date
            <DatePicker />
          </div>
        );
      },
      dataIndex: "start_date",
      key: "start_date",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return <div className="title-created">Created Date</div>;
      },
      dataIndex: "created_date",
      key: "created_date",
      sorter: (a: IDataType, b: IDataType) => {
        return (
          new Date(a.created_date).getTime() -
          new Date(b.created_date).getTime()
        );
      },
      render(text: IDataType) {
        return {
          props: {
            style: { textAlign: "right" },
          },
          children: <span>{text}</span>,
        };
      },
    },
    {
      title: () => {
        return <div className="title-created">Created By</div>;
      },
      dataIndex: "created_by",
      key: "created_by",
      sorter: (a: IDataType, b: IDataType) => {
        return a.created_by.length - b.created_by.length;
      },
    },
    {
      title: () => {
        return <div className="title-created">Updated Date</div>;
      },
      dataIndex: "updated_date",
      key: "updated_date",
      sorter: (a: IDataType, b: IDataType) => {
        return (
          new Date(a.updated_date).getTime() -
          new Date(b.updated_date).getTime()
        );
      },
    },
    {
      title: () => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "105px",
              textAlign: "center",
            }}
          >
            Status
            <Select
              showSearch
              placeholder="Select a status"
              onChange={handleChangeStatus}
            >
              <Option value="new">new</Option>
              <Option value="approved">approved</Option>
              <Option value="rejected">rejected</Option>
              <Option value="closed">closed</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "status",
      key: "status",
      render(text: any) {
        return {
          props: {
            style: { textAlign: "center" },
          },
          children: <div className="status">{text}</div>,
        };
      },
    },
    {
      title: "...",
      render: () => <DeleteFilled style={{ color: "orange" }} />,
    },
  ];

  // {
  //   short_temp: true,
  //   contagion: false,
  //   emergency: true,
  //   mileage_surcharge: false,
  //   primary_quote: true,
  // }

  const handleChangeShortTerm = async (e: string) => {
    if (e === "yes") {
      setShortTemp(true);
      setObj({
        short_temp: shortTemp,
        contagion: contagion,
        emergency: emergency,
        mileage_surcharge: mileageSurcharge,
        primary_quote: primaryQuote,
      });
      console.log(obj);

      const response = await fetchData(obj);
      setDatas(response.data);
    } else if (e === "no") {
      setShortTemp(false);
      setObj({
        short_temp: shortTemp,
        contagion: contagion,
        emergency: emergency,
        mileage_surcharge: mileageSurcharge,
        primary_quote: primaryQuote,
      });
      console.log(obj);
      const response = await fetchData(obj);
      setDatas(response.data);
    }
  };

  const handleChangeContagion = async (e: string) => {
    if (e == "yes") {
      setContagion(true);
      setObj({
        ...obj,
        contagion: true,
      });

      const response = await fetchData(obj);
      setDatas(response.data);
    }
    if (e == "no") {
      setContagion(false);
      setObj({
        ...obj,
        contagion: false,
      });

      console.log(obj);
      const response = await fetchData(obj);
      setDatas(response.data);
    }
  };

  // const handleChangeEmergency = async (e: string) => {
  //   if (e === "yes") {
  //     setEmergency(false);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  //   if (e === "no") {
  //     setEmergency(true);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  // };

  // const handleChangePrimaryQuote = async (e: string) => {
  //   if (e === "yes") {
  //     setPrimaryQuote(false);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  //   if (e === "no") {
  //     setPrimaryQuote(true);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  // };

  // const handleChangeMileageSurcharge = async (e: string) => {
  //   if (e === "yes") {
  //     setMileageSurcharge(false);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  //   if (e === "no") {
  //     setMileageSurcharge(true);
  //     const response = await fetchData(
  //       shortTemp,
  //       contagion,
  //       emergency,
  //       mileageSurcharge,
  //       primaryQuote
  //     );
  //     setDatas(response.data);
  //   }
  // };

  const handleChangeStatus = (e: string) => {
    if (e === "new") {
      const newData: IDataType[] = datas.filter(
        (data) => data.status === "new"
      );
      setDatas(newData);
    }
    if (e === "approved") {
      const newData: IDataType[] = datas.filter(
        (data) => data.status === "approved"
      );
      setDatas(newData);
    }
    if (e === "rejected") {
      const newData: IDataType[] = datas.filter(
        (data) => data.status === "rejected"
      );
      setDatas(newData);
    }
    if (e === "closed") {
      const newData: IDataType[] = datas.filter(
        (data) => data.status === "closed"
      );
      setDatas(newData);
    }
  };

  const { Option } = Select;
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Row>
        <Col span="8">
          {" "}
          <Select
            defaultValue="Change Status"
            style={{ width: "68%", textAlign: "left" }}
            onChange={handleChange}
          >
            <Option value="delete">Delete</Option>
            <Option value="markAsConverted">new</Option>
            <Option value="markAsSubmitted">approved</Option>
            <Option value="markAsDraft">rejected</Option>
            <Option value="markAsInvalid">closed</Option>
          </Select>
          <Button>Apply</Button>
        </Col>
      </Row>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        dataSource={datas}
        columns={columns}
      />
      ;
    </div>
  );
}
