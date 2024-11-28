import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {Button} from "@consta/uikit/Button";
import {Attachment} from "@consta/uikit/Attachment";
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Layout } from '@consta/uikit/Layout';
import {cnMixSpace} from "@consta/uikit/MixSpace";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout/MainLayout';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';

const App = () => {
  return (<Theme preset={presetGpnDefault}>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.main} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.service} element={<ServicePage />} />
          <Route path={`${AppRoute.service}/:id`} element={<ServiceDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Attachment
      fileName={'Скан паспорта'}
      fileExtension={'jpg'}
      withPictogram
      fileDescription={"1.5 Mb 19.01.2020 10:12"}
    />
    <Button label={'Кнопка'}/>
    <Card verticalSpace="xs" horizontalSpace="xs">
      <Text>Отступы 'xs'</Text>
      <Layout className={cnMixSpace}>
        <Layout flex={1}>
          <Text view="primary" size="m" lineHeight="m">
            Это первый блок
          </Text>
        </Layout>
        <Layout flex={2}>
          <Text view="primary" size="m" lineHeight="m">
            А это второй блок, он в два раза шире первого
          </Text>
        </Layout>
      </Layout>
    </Card>
  </Theme>);
};

export default App;