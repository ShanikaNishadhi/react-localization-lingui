import React, { Component } from 'react';
import { Trans, Plural } from '@lingui/macro'
import { useLingui } from '@lingui/react'
 
export default function SimpleApp() {
  const { i18n } = useLingui()
  const existing = new Date()
  const nextYear = new Date('01/01/2023')
  const diffTime = Math.abs(nextYear - existing);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return (
      <>
      <p><Trans>Hello World!</Trans></p>
 
      <p>This guide exists since {i18n.date(existing)}</p>
 
      <h3>
      <Plural
      value={diffDays}
      one="You have # day till New Year!"
      other="You have # days till New Year!"
    />
    </h3>
      </>
      );
}