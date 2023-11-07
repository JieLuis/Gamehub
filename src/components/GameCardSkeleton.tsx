import { Card, Skeleton, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={20} overflow="hidden">
      <Skeleton height="300px">
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
