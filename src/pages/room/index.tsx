import {useState} from 'react'

import TitleBar from '../../layout/components/titileBar'
import { userData } from './roomModel'
import { WrapperInputModal1,Input ,Modal,FilterBar,Container,Table,Select} from '../../components'


export default function Room() {
  const [isModalOpen, setIsModalOpen] =  useState(false);

  const handleModal = () => {
      setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <TitleBar title="Room Mananger" page='room' onClick={handleModal}/>
      <FilterBar />
      <Table dataSource={userData}/>
      <Modal title="Create New Room"  open={isModalOpen} cancel={handleCancel} width={280} >
      <WrapperInputModal1>
          <Input label="Room NO." />
          <Select label="Type"/>
          <Select label="Status"/>
          <Input label="Price" />

        </WrapperInputModal1>
      </Modal>
    </Container>
  )
}
