import { Table, Row, Col, Select, Button, Input, DatePicker } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const selectionType = "checkbox";

  useEffect(() => {
    axios.get("http://localhost:3001/table").then((response) => {
      setDatas(response.data);
    });
  }, []);

  const columns = [
    {
      title: () => {
        return (
          <div style={{ textAlign: "center" }}>
            Quote ID
            <Input />
          </div>
        );
      },
      dataIndex: "key",
      key: "key",
      render(text: any) {
        return {
          props: {
            style: { color: "#008DFF" },
          },
          children: <span>{text ? text.slice(0, 9) : ""}</span>,
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
            Care Recipient Name
            <Input />
          </div>
        );
      },
      dataIndex: "care_recipient_name",
      key: "care_recipient_name",
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
              display: "flex",
              flexDirection: "column",
              width: "80px",
              textAlign: "center",
            }}
          >
            Short Term
            <Select onChange={handleChangeInput}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "short_temp",
      key: "short_temp",
      render(text: any) {
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
            <Select onChange={handleChangeInput}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "contagion",
      key: "contagion",
      render(text: any) {
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
            <Select onChange={handleChangeInput}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "emergency",
      key: "emergency",
      render(text: any) {
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
            <Select onChange={handleChangeInput}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "mileage_surcharge",
      key: "mileage_surcharge",
      render(text: any) {
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
            <Select onChange={handleChangeInput}>
              <Option value="yes">YES</Option>
              <Option value="no">NO</Option>
            </Select>
          </div>
        );
      },
      dataIndex: "primary_quote",
      key: "primary_quote",
      render(text: any) {
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
            <Select showSearch placeholder="Select a status">
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
      render: () => <DeleteOutlined />,
    },
  ];

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    const newData: IDataType[] = datas.filter(
      (data) => data.short_temp === true
    );
    setDatas(newData);
  };

  const { Option } = Select;
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Row>
        <Col span="8">
          {" "}
          <Select
            defaultValue="Bulk Action"
            style={{ width: "70%", textAlign: "left" }}
            onChange={handleChange}
          >
            <Option value="delete">Delete</Option>
            <Option value="markAsConverted">Mark as Converted</Option>
            <Option value="markAsSubmitted">Mark as Submitted</Option>
            <Option value="markAsDraft">Mark as Draft</Option>
            <Option value="markAsInvalid">Mark as Invalid</Option>
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
