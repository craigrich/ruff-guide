import { Room, arrayOfEntries } from 'contentful-types';
import RoomEntry from 'components/Room';

interface Props {
  rooms: arrayOfEntries<Room>;
}

function Availability({ rooms }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-5xl capitalize text-center mb-12">Availability</h1>
      {rooms.map((room) => (
        <RoomEntry key={room.sys.id} room={room} />
      ))}
    </div>
  );
}

export default Availability;
