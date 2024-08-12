import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px" height="400px">
      <Skeleton>
        <CardBody>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </CardBody>
      </Skeleton>
    </Card>
  );
}

export default GameCardSkeleton;
