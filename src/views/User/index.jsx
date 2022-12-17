import { useParams } from "react-router-dom";
import cls from "./user.module.scss";
import { useEffect, useState } from "react";
import { request } from "../../utils/http-client";

export default function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  // {
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "Bret",
  //   email: "Sincere@april.biz",
  //   address: {
  //     street: "Kulas Light",
  //     suite: "Apt. 556",
  //     city: "Gwenborough",
  //     zipcode: "92998-3874",
  //     geo: {
  //       lat: "-37.3159",
  //       lng: "81.1496",
  //     },
  //   },
  //   phone: "1-770-736-8031 x56442",
  //   website: "hildegard.org",
  //   company: {
  //     name: "Romaguera-Crona",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     bs: "harness real-time e-markets",
  //   },
  // },
  useEffect(() => {
    request({
      method: "get",
      url: "",
      params: {
        query: `query getUser{
        User(id: "${userId}"){
          id
          name
          username
          email
          phone
          website
        }
      }`,
      },
    }).then((res) => {
      setUser(res.data.User);
    });
  }, []);
  return (
    <div className={cls.userCont}>
      <div className={cls.user}>
        <div className={cls.user__name}>{user.name}</div>
        <div className={cls.user__username}>{user.username}</div>
        <div className={cls.user__email}>{user.email}</div>
        <div className={cls.user__phone}>{user.phone}</div>
        <div className={cls.user__website}>{user.website}</div>
      </div>
    </div>
  );
}
