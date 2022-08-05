import React from 'react'

import { NotificationType } from '../../types/User'

import { ICON, MATERIALICON } from '../../constants/icon'
import { formatCreatedAt } from '../../helpers/formatCreatedAt'

import { Container, Row, Column, Text } from './styles'

const Notifications = ({
  notifications,
}: {
  notifications: NotificationType[]
}) => (
  <Container>
    {notifications.map((item) => (
      <Row key={item._id}>
        <Column>
          {item.type === 'category' ? (
            <ICON name="apps-outline" size={38} />
          ) : item.type === 'subcategory' ? (
            <MATERIALICON name="family-tree" size={38} />
          ) : (
            <ICON name="home-outline" size={38} />
          )}
        </Column>
        <Column large>
          <Text>{item.title}</Text>
          <Text medium>{item.message}</Text>
          <Text small>{formatCreatedAt({ createdAt: item.createdAt })}</Text>
        </Column>
      </Row>
    ))}
  </Container>
)

export default Notifications
