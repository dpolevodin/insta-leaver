import React, {useEffect} from "react";
import { useState } from 'react';
import { List, Typography, Divider } from 'antd';
import { UserData } from '../../types'

export const User = () => {
  const [userData, setUserData] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(20)

  const url = 'https://jsonplaceholder.typicode.com/posts/'

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => {
        setUserData(result);
      });
  }, [url]);

  const renderList = userData.map((item: UserData) => <div key={item.id} >{item.id} - {item.title}</div>)

  return (
<>
  <Divider orientation="left">UserName</Divider>
  {renderList.splice(0, itemsPerPage)}
</>
  )
}
