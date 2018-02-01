/*
 * @Author: bianhao 
 * @Date: 2018-01-05 11:19:37 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-16 11:03:38
 */
import color from './document/color.md';
import layout from './document/layout.md';
import menu from './document/menu.md';
import scroll from './document/scroll.md';
import message from './document/message.md';

export default [
  {
    path: '/color',
    component: color
  },
  {
    path: '/layout',
    component: layout
  },
  {
    path: '/menu',
    component: menu
  },
  {
    path: '/scroll',
    component: scroll
  },
  {
    path: '/message',
    component: message
  }
]