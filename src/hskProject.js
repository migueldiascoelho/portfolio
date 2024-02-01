// hskProject.js
import React from 'react';

const ProjectInfo = () => (
    
    <div className="hsk-text">

    <p>
      <strong>Description:</strong><br />
      HSK Flashcard is an app that helps to memorize Chinese words.
    </p>

    <p> These words are necessary to pass the HSK Exams (Hanyu Shuiping Kaoshi), the official chinese language exams.</p>

    <p>This App is for students and professionals that need a more interactive way to learn chinese.</p>
    
    <p style={{ marginTop: '20px'}}>
    <strong>Features:</strong><br />
            - All vocabulary needed to pass all the HSK levels (+ 5000 words)
    </p>
    <p>- Spoken pronounciation for all words (Google Translate API)</p>
    <p>- Pressing, right and left swipes interact with the flashcards</p>    
    <p>- Words reappear in the fold until they are correctly guessed</p>
    <p>- User Level and percentage of words learned are displayed in the menu</p>
    <p>- Rare fold mode that allows users to practice the words they've encountered less often</p>

    </div>


);

export default ProjectInfo;
