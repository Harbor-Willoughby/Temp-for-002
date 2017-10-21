import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { Provider } from 'react-redux';
import Layout from './Layout';
import Screenshot from '../component/Screenshot';
import store from '../store';
import FromToDate from '../component/FromToDate';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with Button', () => <Button onClick={action('clicked')}>ddddd</Button>)
  .add('with Button1', () => <Layout onClick={action('clicked')}>ddddd</Layout>);

storiesOf('Trip', module)
.add('to Storybook', () => <Layout />);

storiesOf('Screenshot', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('load screenshot', () => <Screenshot url={ 'http://blog.naver.com/chic_creator/221101587512' } />);

storiesOf('FromToDate', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('load FromToDate', () => <FromToDate />);