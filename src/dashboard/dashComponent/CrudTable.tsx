import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  title:string;
  subTitle:string;
  urlVideo:string;
  urlImg:string;
  
}
// name: string;
//   age: number;
//   address: string;
//   tags: string[];

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sub Title',
    dataIndex: 'subTitle',
    key: 'subTitle',
  },
  {
    title: 'Url Video',
    dataIndex: 'urlVideo',
    key: 'urlVideo',
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='text-soby-yellow-light'>Edit </a> 
        {/* {record.title} */}
        <a className='text-soby-red'>Delete</a>
      </Space>
    ),
  },
];
// tags: ['nice', 'developer'],
const data: DataType[] = [
 
  {
    key: '1',
    title: 'John Brown',
    subTitle: 'kjhdsuygd',
    urlVideo: 'New York No. 1 Lake Park',
    urlImg:'dsdguydgsyu'
  },
  {
    key: '2',
    title: 'John Brown',
    subTitle: 'kjhdsuygd',
    urlVideo: 'New York No. 1 Lake Park',
    urlImg:'dsdguydgsyu'
  },
  {
    key: '3',
    title: 'John Brown',
    subTitle: 'kjhdsuygd',
    urlVideo: 'New York No. 1 Lake Park',
    urlImg:'dsdguydgsyu'
  },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
];

const CrudTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default CrudTable;