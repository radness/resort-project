import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        // console.log(value);
        const { loading, sortedRooms, rooms } = value;

        return (
          <div>
            hello froms rooms container
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
