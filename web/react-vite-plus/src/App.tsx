import {
  GithubOutlined,
  XOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import {
  App as AntApp,
  Button,
  Card,
  ConfigProvider,
  Divider,
  Layout,
  Space,
  Tag,
  Typography,
  theme,
} from "antd";
import { useCounter } from "./counter";

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const features = [
  {
    icon: <ThunderboltOutlined />,
    title: "Instant HMR",
    description:
      "Lightning-fast Hot Module Replacement so you can iterate at the speed of thought.",
    color: "#6366f1",
  },
  {
    icon: <RocketOutlined />,
    title: "Optimized Build",
    description: "Powered by Rolldown for production builds that are fast and lean out of the box.",
    color: "#10b981",
  },
  {
    icon: <BulbOutlined />,
    title: "Type Safe",
    description: "End-to-end TypeScript support with type-aware linting baked into every save.",
    color: "#f59e0b",
  },
];

const socialLinks = [
  { icon: <GithubOutlined />, label: "GitHub", url: "https://github.com/vitejs/vite" },
  { icon: <XOutlined />, label: "X.com", url: "https://x.com/vite_js" },
  { icon: <FileTextOutlined />, label: "Docs", url: "https://vite.dev/" },
];

export function App() {
  const { label, increment } = useCounter();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 8,
          fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
        },
      }}
    >
      <AntApp>
        <Layout style={{ minHeight: "100vh", background: "transparent" }}>
          <Header
            style={{
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 48px",
              height: 64,
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Space align="center">
              <Tag color="#6366f1" style={{ fontSize: 16, padding: "4px 12px", fontWeight: 600 }}>
                react-vite-plus
              </Tag>
            </Space>
            <Space>
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  type="text"
                  icon={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Button>
              ))}
            </Space>
          </Header>

          <Content style={{ padding: "80px 48px", maxWidth: 960, margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Tag color="purple" style={{ marginBottom: 16 }}>
                Vite + React + Ant Design
              </Tag>
              <Title level={1} style={{ fontSize: 56, marginBottom: 16, letterSpacing: -1 }}>
                Build Fast.
                <br />
                Ship Faster.
              </Title>
              <Paragraph
                type="secondary"
                style={{ fontSize: 18, maxWidth: 560, margin: "0 auto 32px" }}
              >
                A modern React starter powered by Vite+, TypeScript, and Ant Design. Edit{" "}
                <Text code>src/App.tsx</Text> and see your changes instantly.
              </Paragraph>
              <Space size="middle">
                <Button type="primary" size="large" onClick={increment}>
                  {label}
                </Button>
                <Button size="large" href="https://ant.design" target="_blank" rel="noreferrer">
                  Ant Design Docs
                </Button>
              </Space>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {features.map((f) => (
                <Card
                  key={f.title}
                  hoverable
                  style={{ borderRadius: 12 }}
                  styles={{ body: { padding: 28 } }}
                >
                  <Space direction="vertical" size="small">
                    <Text style={{ fontSize: 28, color: f.color }}>{f.icon}</Text>
                    <Title level={4} style={{ margin: 0 }}>
                      {f.title}
                    </Title>
                    <Text type="secondary">{f.description}</Text>
                  </Space>
                </Card>
              ))}
            </div>
          </Content>

          <Divider style={{ margin: 0 }} />
          <Footer style={{ textAlign: "center", background: "transparent", padding: "24px 48px" }}>
            <Text type="secondary">Built with Vite+ & Ant Design · Ready for production</Text>
          </Footer>
        </Layout>
      </AntApp>
    </ConfigProvider>
  );
}
