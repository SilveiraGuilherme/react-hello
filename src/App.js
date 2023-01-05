import { useEffect, useState } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';

export default function App() {
  // const state = useState('Guilherme');
  // const name = state[0];
  // const setName = state[1];
  const [name, setName] = useState('Guilherme');
  const [birthDate, setBirthDate] = useState('1990-07-24');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }
    function toggleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }
  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>react-hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline} />
        <div className="flex justify-between items-center">
          <CheckboxInput
            labelDescription="Show/Hide Timer"
            onCheckboxChange={toggleShowTimer}
          />
          <div className="text-right m-1">{showTimer && <Timer />}</div>
        </div>
        <TextInput
          autoFocus
          id={getNewId()}
          labelDescription="Type your name:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          id={getNewId()}
          labelDescription="Type your date of birth:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          Your name is {name}, which has {name.length} letters, and I am{' '}
          {getAgeFrom(birthDate)} years old.
        </p>
      </Main>
    </>
  );
}
