import { Card, Skeleton, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px">
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
