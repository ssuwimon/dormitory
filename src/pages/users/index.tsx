import { useState } from 'react'
import Container from "../../components/container"
import FilterBar from "../../components/filterBar"
import Table from "../../components/table"
import TitleBar from "../../layout/components/titileBar"
import { userData } from "../room/roomModel"
import { Modal, InputLabel, Input, WrapperInputModal } from '../../components/index'
import TextArea from 'antd/es/input/TextArea'
import { MuliLineInput } from '../../components/input'

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <Container>
      <TitleBar title="Users Mananger" page="users" onClick={handleModal} />
      <FilterBar />
      <Table dataSource={userData} />
      <Modal title="Create New Tanant" open={isModalOpen} cancel={handleCancel} >
        <WrapperInputModal>
          <Input label="Firstname" />
          <Input label="Lastname" />
        </WrapperInputModal>
        <WrapperInputModal>
          <Input label="Nickname" />
          <Input label="ID card" />
        </WrapperInputModal>
        <MuliLineInput label='Address on ID card' rows={3}/>
      </Modal>

    
    </Container>
  )
}
