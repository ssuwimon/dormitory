import { useState, useRef } from "react";
import Container from "../../components/container";
import FilterBar from "../../components/filterBar";
import Table from "../../components/table";
import TitleBar from "../../layout/components/titileBar";
import { ColumnProps, userData, userDataProps } from "../room/roomModel";
import {
  Modal,
  InputLabel,
  Input,
  WrapperInputModal,
} from "../../components/index";
import TextArea from "antd/es/input/TextArea";
import { InputIdCard, MuliLineInput } from "../../components/input";
import InputMask from "react-input-mask";
import { ColumnGroupType, ColumnType, ColumnsType } from "antd/es/table";
export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idCard, setIdCard] = useState("");
  const id = useRef("");
  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  };
  const columns :ColumnsType<object> | undefined= [
    {
      dataIndex: "name",
      title: "Room",
      //   render: (text) => <a>{text}</a>,
    },
    {
      dataIndex: "idCard",
      title: "ID Card",
    },
    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "phone",
      title: "Phone",
      //   render: (_, { tags }) => (
      //     <>
      //       {tags.map((tag) => {
      //         let color = tag.length > 5 ? 'geekblue' : 'green';
      //         if (tag === 'loser') {
      //           color = 'volcano';
      //         }
      //         return (
      //           <Tag color={color} key={tag}>
      //             {tag.toUpperCase()}
      //           </Tag>
      //         );
      //       })}
      //     </>
      //   ),
    },
  ];
  return (
    <Container>
      <TitleBar title="Users Mananger" page="users" onClick={handleModal} />
      <FilterBar />
      <Table dataSource={userData} columns={columns} onEdit={true}/>
      <h1>{idCard}</h1>
      <Modal title="Create New Tanant" open={isModalOpen} cancel={handleCancel}>
        <WrapperInputModal>
          <Input label="Firstname" />
          <Input label="Lastname" />
        </WrapperInputModal>
        <WrapperInputModal>
          <Input label="Nickname" />
          <InputIdCard label="ID card" />
        </WrapperInputModal>
        <MuliLineInput label="Address on ID card" rows={3} />
      </Modal>
    </Container>
  );
}
