"use client";

import { Layout, Typography } from "antd";
import { ReactNode } from "react";

const { Footer } = Layout;
const { Text, Link } = Typography;

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-[90vh] overflow-y-auto">{children}</div>
      <div className="h-[10vh] bg-gray-200">
        <Footer className="flex items-center">
          <div className="flex items-center justify-between w-full  gap-2">
            <Text>Copyright © 2005 - Art Event Dubai</Text>
            <Text>Dubai, City</Text>
            <Text>
              Tel: <Link href="tel:123-456-7890">123-456-7890</Link>
            </Text>
            <Text>
              Email: <Link href="mailto:info@myside.com">info@myside.com</Link>
            </Text>
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default layout;
