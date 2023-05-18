'use client';
import { useWidthState } from './PlaygroundPage.hook';
import { TestSection } from '@/components/playgroundSections/testSection/testSection';
import { DesktopPlayground } from '@/components/layout/playgroundLayout/DesktopPlayground/DesktopPlayground';
import styles from './page.module.scss';
import { MobilePlayground } from '@/components/layout/playgroundLayout/MobilePlayground/MobilePlayground';
import { VerticalResizeContainer } from '@/components/layout/playgroundLayout/VerticalResizeContainer/VerticalResizeContainer';
import { LS_KEYS, PageList } from '@/common';
import { OperationSection } from '@/components/playgroundSections/OperationSection/OperationSection';
import { ResponseSection } from '@/components/playgroundSections/ResponseSection/ResponseSection';
import { VarsSection } from '@/components/playgroundSections/VarsSection/VarsSection';
import { TabsBlock } from '@/components/layout/playgroundLayout/TabsBlock/TabsBlock';
import { redirect } from 'next/navigation';
import { usePathWithLocale } from '@/common/hook';
import { firebaseAuth } from '@/firebase';
import { useIdToken } from 'react-firebase-hooks/auth';

export default function PlaygroundPage(): JSX.Element {
  const isMobileView = useWidthState();
  const [welcomePage] = usePathWithLocale([PageList.welcome]);
  const [user, loading] = useIdToken(firebaseAuth);
  const data = {
    data: {
      characters: {
        results: [
          {
            name: 'Rick Sanchez',
            status: 'Alive',
          },
          {
            name: 'Morty Smith',
            status: 'Alive',
          },
        ],
      },
    },
  };

  if (!loading && !user) redirect(welcomePage);

  return (
    <div className={styles.playground}>
      {isMobileView ? (
        <MobilePlayground>
          {{
            documentation: <TestSection>Docs</TestSection>,
            resizeMobileBlock: (
              <VerticalResizeContainer lsKey={LS_KEYS.MOBILE_VERTICAL_BLOCK_SIZE}>
                {{
                  topBlock: (
                    <TabsBlock>
                      {{
                        operation: <OperationSection />,
                        vars: <VarsSection />,
                        headers: <TestSection> </TestSection>,
                      }}
                    </TabsBlock>
                  ),
                  bottomBlock: (
                    <ResponseSection isMobile={true} value={JSON.stringify(data, null, 2)} />
                  ),
                }}
              </VerticalResizeContainer>
            ),
          }}
        </MobilePlayground>
      ) : (
        <DesktopPlayground>
          {{
            documentation: <TestSection>Docs</TestSection>,
            operation: (
              <VerticalResizeContainer lsKey={LS_KEYS.DESKTOP_VERTICAL_BLOCK_SIZE}>
                {{
                  topBlock: <OperationSection />,
                  bottomBlock: (
                    <TabsBlock>
                      {{
                        vars: <VarsSection />,
                        headers: <TestSection> </TestSection>,
                      }}
                    </TabsBlock>
                  ),
                }}
              </VerticalResizeContainer>
            ),
            response: <ResponseSection value={JSON.stringify(data, null, 2)} />,
          }}
        </DesktopPlayground>
      )}
    </div>
  );
}
