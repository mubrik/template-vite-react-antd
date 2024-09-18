import {ConfigProvider} from 'antd';
import type {ThemeConfig} from 'antd';

const config: ThemeConfig = {};

interface Props {
  children: React.ReactNode;
}

const AntDThemeProvider = ({children}: Props) => {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
};

export default AntDThemeProvider;
