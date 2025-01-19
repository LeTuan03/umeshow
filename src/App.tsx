import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { CustomLivestreamPlayer } from "./CustomLivestreamPlayer";

const apiKey = "abkwrfvfg8rw";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTczNzI4MDMwMywiZXhwIjoxNzM3MzY2NzAzLCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV84NmNiMTcxYy1kYjEwLTRlNDctYTA1Ni1mMDU3N2M5OTAyMzUiXX0.cLNJW-81YflNMUChTHRoxqrSxXBY4wE46JRToBl2GxA"
const callId = "livestream_86cb171c-db10-4e47-a056-f0577c990235";

const user: User = { type: "anonymous" };
const client = new StreamVideoClient({ apiKey, user, token });

export default function App() {
  return (
    <StreamVideo client={client}>
      <CustomLivestreamPlayer callType="livestream" callId={callId} />
    </StreamVideo>
  );
}