import React from "react";
import {
  Session,
  Conference,
  JoinConferenceButton,
  LeaveConferenceButton,
  ParticipantsList,
  ParticipantsGrid,
  LocalToggleAudioButton,
  LocalToggleVideoButton,
} from "@dolbyio/comms-uikit-react";

import { useState } from "react";

function Content() {
  const [conferenceId, setConferenceId] = useState();

  const contentContainerStyle = {
    minHeight: "100vh",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#14141A",
    padding: "20px 0",
    boxSizing: "border-box",
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const joinOptions = {
    constraints: {
      audio: true,
      video: true,
    },
  };

  const meetingName = "My Meeting";

  const joinTooltipText = "Join meeting";
  const leaveTooltipText = "Leave meeting";
  const participantInfo = { name: "John Doe" };

  const localText = "you"; // The local participant's name.
  const muteText = "mute"; // Displayed in a tooltip when a participant is not muted.
  const unmuteText = "unmute"; // Displayed in a tooltip when a participant is muted.
  const soundOnText = "sound on"; // Displayed in a tooltip when a participant is speaking.
  const soundOffText = "sound off"; // Displayed in a tooltip when a participant is not speaking.

  return (
    <div className="App" style={contentContainerStyle}>
      <Session participantInfo={participantInfo}>
        {/* Code from previous examples has been removed for brevity */}
        {!conferenceId ? (
          <div style={buttonContainerStyle}>
            <JoinConferenceButton
              joinOptions={joinOptions}
              meetingName={meetingName}
              username={participantInfo.name}
              tooltipText={joinTooltipText}
              onSuccess={(id) => setConferenceId(id)}
            >
              Join Video Call
            </JoinConferenceButton>
          </div>
        ) : (
          <Conference id={conferenceId}>
            <ParticipantsList
              localText={localText}
              muteText={muteText}
              unmuteText={unmuteText}
              soundOnText={soundOnText}
              soundOffText={soundOffText}
            />
            <ParticipantsGrid
              localText={localText}
              additionalContainerStyle={{ height: 400 }}
            />
            <div style={buttonContainerStyle}>
              <LocalToggleAudioButton />
              <LocalToggleVideoButton />
              <LeaveConferenceButton
                tooltipText={leaveTooltipText}
                onSuccess={() => setConferenceId(null)}
              />
            </div>
          </Conference>
        )}
      </Session>
    </div>
  );
}

export default Content;
