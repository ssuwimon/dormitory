import { useState } from "react";

import TitleBar from "../../layout/components/titileBar";
import { userData } from "./roomModel";
import {
  WrapperInputModal1,
  Input,
  Modal,
  FilterBar,
  Container,
  Table,
  Select,
} from "../../components";
import { ColumnsType } from "antd/es/table";

export default function Room() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns: ColumnsType<object> = [
    {
      dataIndex: "name",
      title: "Room", //   render: (text) => <a>{text}</a>,
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
      <TitleBar title="Room Mananger" page="room" onClick={handleModal} />
      <FilterBar />
      <Table 
      dataSource={userData} 
      columns={columns}
      onEdit={true}
      onDelete={true}
      onSeeMore={true}

      />
      <Modal
        title="Create New Room"
        open={isModalOpen}
        cancel={handleCancel}
        width={280}
      >
        <WrapperInputModal1>
          <Input label="Room NO." />
          <Select label="Type" />
          <Select label="Status" />
          <Input label="Price" />
        </WrapperInputModal1>
      </Modal>
    </Container>
  );
}
