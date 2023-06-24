import { Space, Table as Grid, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
// import { roomData } from '../pages/room/roomModel';
import { userDataProps } from '../pages/room/roomModel';
import styled from 'styled-components';
import Action from './action';

// interface roomDataProps {
//     id: number,
//     room: string,
//     idCard: string,
//     name: string,
//     phone: string
// }
const TableWrapper = styled(Grid)`
    background-color: red;
`



interface tableProps {
    dataSource: userDataProps[]
}
export default function Table(props:tableProps) {
    const columns: ColumnsType<userDataProps>= [
        {
          title: 'Room',
          dataIndex: 'room',
          key: 'name',
          width: 200,
        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'ID Card',
          dataIndex: 'idCard',
          key: 'idCard',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone',
          key: 'phone',
          dataIndex: 'phone',
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
        {
          title: 'Action',
          key: 'action',
          align: 'center',
          render: (_, record) => (
        
            <Action/>
         
          ),
        },
      ];
      
  return (
    <div>
        <Grid columns={columns} dataSource={props?.dataSource} />
      
    </div>
  )
}
