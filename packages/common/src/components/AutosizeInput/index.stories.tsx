import * as React from 'react';
import { storiesOf } from '@storybook/react';
import AutosizeInput from './';

const stories = storiesOf('components/Input', module);

stories.add('Basic AutosizeInput', () => <AutosizeInput />);
