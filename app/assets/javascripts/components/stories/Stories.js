import React, { Fragment } from "react";
import StoryItem from "../story/StoryItem";
import { Draggable } from 'react-beautiful-dnd';

const Stories = ({ stories }) => {
  if (!stories.length) {
    return null;
  }

  return (
    <Fragment>
      {stories.map((story, index) => (
        <Draggable
        key={story.id}
        draggableId={story.id}
        index={index}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <StoryItem key={story.id} story={story} />
          </div>
        )}
      </Draggable>
      ))}
    </Fragment>
  );
};

export default Stories;
