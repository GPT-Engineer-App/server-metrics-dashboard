// Complete the Index page component for a server-side metrics monitoring dashboard
import { Box, Flex, Text, Progress, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FaServer, FaDatabase, FaMemory, FaNetworkWired } from "react-icons/fa";

const Index = () => {
  // Dummy data for demonstration
  const metrics = {
    cpuUsage: 70,
    memoryUsage: 55,
    diskUsage: 40,
    networkThroughput: 90,
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Server Metrics Dashboard</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <MetricCard icon={<FaServer />} title="CPU Usage" value={`${metrics.cpuUsage}%`} colorScheme="red" progress={metrics.cpuUsage} />
        </GridItem>
        <GridItem colSpan={1}>
          <MetricCard icon={<FaMemory />} title="Memory Usage" value={`${metrics.memoryUsage}%`} colorScheme="purple" progress={metrics.memoryUsage} />
        </GridItem>
        <GridItem colSpan={1}>
          <MetricCard icon={<FaDatabase />} title="Disk Usage" value={`${metrics.diskUsage}%`} colorScheme="orange" progress={metrics.diskUsage} />
        </GridItem>
        <GridItem colSpan={1}>
          <MetricCard icon={<FaNetworkWired />} title="Network Throughput" value={`${metrics.networkThroughput}%`} colorScheme="teal" progress={metrics.networkThroughput} />
        </GridItem>
      </Grid>
    </Box>
  );
};

const MetricCard = ({ icon, title, value, colorScheme, progress }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Flex alignItems="center" mb={2}>
        <Box fontSize="3xl" color={`${colorScheme}.400`} as="span" mr={2}>
          {icon}
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
      </Flex>
      <Text fontSize="2xl" mb={2}>
        {value}
      </Text>
      <Progress colorScheme={colorScheme} size="lg" value={progress} />
    </Box>
  );
};

export default Index;
