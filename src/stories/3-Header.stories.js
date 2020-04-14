import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../components/Header/index';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderStory = () => <Header login={action('login action')} />;
