import {useState} from 'react'
import { Button, Modal as Toggle } from "antd"
// export default function Modal(){
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   return (
//     <Toggle title="Basic Modal" open={isModalOpen}>
      
//     </Toggle>
//   )
// }

interface modalProps {
  open:boolean,
  cancel:React.MouseEventHandler,
  title:string,
  children: React.ReactNode,
  width?:number,

}
interface ChildrenProps {
  children :  React.ReactNode
}


export default function Modal(props:modalProps & ChildrenProps) {
  const {open,cancel,title,width} = props
  const {children} = props


  return (
    <div>
      <Toggle 
      title={title} 
      width={width}
      open={open}   
      onCancel={cancel} 
      okText="Save" 
      footer={  <Button type="primary">Primary Button</Button>}>
        {children}
      </Toggle>   
    </div>
  )
}
