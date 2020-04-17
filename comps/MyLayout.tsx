import Header from './Header';
import styled from 'styled-components';

interface Props {
  children: any
}

const Layout = (props: Props) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;