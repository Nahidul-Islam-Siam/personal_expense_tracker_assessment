/**
 * app/loading.tsx
 * Loading spinner using Ant Design's <Spin /> component
 */

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  // Customize the icon with size and style
  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: '#027a48' }} spin />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-50">
      {/* Ant Design Spin */}
      <Spin indicator={antIcon} />

      {/* Optional: Loading Text */}
      <p className="mt-6 text-lg font-medium text-gray-700">Loading, please wait...</p>

      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-emerald-50 to-transparent"></div>
    </div>
  );
}