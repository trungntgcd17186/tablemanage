import { Table, Row, Col, Select, Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  {
    title: "Quote ID",
    dataIndex: "key",
    key: "key",
    render(text: any) {
      return {
        props: {
          style: { color: "#008DFF" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Care Recipient Name",
    dataIndex: "care_recipient_name",
    key: "care_recipient_name",
  },
  {
    title: "Care Recipient DOB",
    dataIndex: "care_recipient_dob",
    key: "care_recipient_dob",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Short Temp",
    dataIndex: "short_temp",
    key: "short_temp",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Contagion",
    dataIndex: "contagion",
    key: "contagion",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Contagion",
    dataIndex: "contagion",
    key: "contagion",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Emergency",
    dataIndex: "emergency",
    key: "emergency",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Mileage Surcharge",
    dataIndex: "mileage_surcharge",
    key: "mileage_surcharge",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Primary Quote",
    dataIndex: "primary_quote",
    key: "primary_quote",
    render(text: any) {
      return {
        props: {
          style: { color: text === "YES" ? "#008DFF" : "red" },
        },
        children: <span>{text}</span>,
      };
    },
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date",
  },
  {
    title: "Created Date",
    dataIndex: "created_date",
    key: "created_date",
  },
  {
    title: "Created_By",
    dataIndex: "created_by",
    key: "created_by",
  },
  {
    title: "Updated_Date",
    dataIndex: "updated_date",
    key: "updated_date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "...",
    render: () => <DeleteOutlined />,
  },
];

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
  const [datas, setDatas] = useState([]);
  const selectionType = "checkbox";

  useEffect(() => {
    axios.get("http://localhost:3001/table").then((response) => {
      setDatas(response.data);
    });
  }, []);

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
