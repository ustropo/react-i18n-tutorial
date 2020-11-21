import { Icon } from "semantic-ui-react";

export default function Loading() {
  return (
    <div style={{position: 'fixed', top: '50%', left: '50%'}}>
      <Icon loading name="spinner" size="huge"/>
    </div>
  )
}
