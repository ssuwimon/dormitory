import { Space, Table as Grid, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
// import { roomData } from '../pages/room/roomModel';
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { DeleteAction, EditAction, SeeMoreAction } from "./index";

// interface roomDataProps {
//     id: number,
//     room: string,
//     idCard: string,
//     name: string,
//     phone: string
// }
const TableWrapper = styled(Grid)`
  background-color: red;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

type TableProps<> = {
  dataSource: object[] | undefined;
  columns: ColumnsType<object>;
  onEdit?: Function | boolean;
  onDelete?: Function | boolean;
  onSeeMore?: Function | boolean;
};
export default function Table(props: TableProps) {
  const { dataSource, columns, onEdit, onDelete, onSeeMore } = props;

  const arr = [
    ...columns,
    {
      dataIndex: "name",
      title: "Action",
      render: () => {
        return (
          <Wrapper>
            {onSeeMore && <SeeMoreAction />}
            {onEdit && <EditAction />}
            {onDelete && <DeleteAction />}
          </Wrapper>
        );
      },
    },
  ];

  console.log("🚀 ~ file: table.tsx:46 ~ Table ~ columns:", arr);

  return (
    <div>
      <Grid columns={arr} dataSource={dataSource} />
    </div>
  );
}
