'use client';
import { operationSelector, setOperation } from '@/redux';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
// import { graphql } from 'cm6-graphql';
import { customTheme } from '../customTheme';
// import { schema } from './OperationSection.mock';
import styles from './OperationSection.module.scss';

export const OperationSection = (): JSX.Element => {
  const t = useTranslations('Playground');

  const state = useSelector(operationSelector);
  const dispatch = useDispatch();
  const onChangeHandler = (e: string): void => {
    dispatch(setOperation(e));
  };

  return (
    <section className={styles.section}>
      <CodeMirror
        autoFocus
        value={state}
        theme={customTheme({
          settings: { gutterBackground: '#21222d' },
        })}
        className={styles.codemirror}
        placeholder={t('operationPlaceholder')}
        // extensions={graphql(schema)}
        extensions={[json()]}
        onChange={(e): void => {
          onChangeHandler(e);
        }}
      />
    </section>
  );
};
