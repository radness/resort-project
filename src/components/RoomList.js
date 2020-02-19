import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="enpty-search">
        <h3>unfortunately no rooms matched your search parameters.</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={DataTransferItem.id} room={item} />;
        })}
      </div>
    </section>
  );
}
