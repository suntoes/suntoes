import { Box, Container, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react"
import { Paragraph } from "./paragraph"
import Section from "./section"

type objPost = {
  img: string,
  title: string,
  current: boolean,
  sub: string,
  tags: [
    string
  ]
  text: string,
  link: [
    {
      name: string,
      href: string
    }
  ],
}

function Post({arr=[]}) {
  return(
    <>
    {
      arr.map((obj:objPost, i:number) => 
        (
          <Section delay={(3+i)*0.1}>
            <Container 
            display={"flex"}
            maxW="container.md"
            flexDirection={"row"}
            bg="white"
            color={'#2c2c2c'}
            p={5}
            minW={0}>
            <Box minW={{base: 12, sm: 20}}>
              <Image 
                boxSize={{base: 12, sm: 20}}

                alt={'title' in obj ? obj.title + ' pic' : "null" }
                src={'img' in obj ? obj.img : "" }/>

            </Box>
            <Box 
              bg="white"  
              pl={5} 
              wordBreak='break-word'>
              <Stack 
                direction={'column'}  
                spacing={'2px'}  
                mb={2}>

                {'title' in obj &&
                  (
                  <Heading 
                    lineHeight={0.8}
                    fontSize={26}
                    mb={0}>
                    {obj.title}
                    {
                      ('current' in obj && obj.current) &&
                      (
                        <>
                          {' '}
                          <Tag
                            size={'sm'}
                            bg="red.600"
                            color="white"
                            borderRadius={0}
                          >Current
                          </Tag>
                        </>
                      )
                    }
                  </Heading>
                  )
                }

                {'sub' in obj &&
                  (
                    <Text 
                      lineHeight={1} 
                      size={'sm'}>
                      {obj.sub}
                    </Text>
                  )
                }

                {'tags' in obj &&
                  (
                    <Box pt={1}>
                      {obj.tags.map((t:String) => (
                        <Tag
                          bg="#111111b0"
                          color="white"
                          wordBreak='break-word'
                          mb={1}
                          mr={1}
                          borderRadius={0}
                        >{t}
                        </Tag>
                      ))}
                    </Box>
                  )
                }

              </Stack>
              
              {'text' in obj &&
                (
                  <Paragraph>{obj.text}</Paragraph>
                )
              }

              {'link' in obj &&
                (
                  <Box
                  fontWeight={500}
                    mt={3.5}>
                    <Text display={'inline'} >Relevant Link:{' '}</Text>
                  {obj.link.map((l:any, i:Number)=>(
                    i !== obj.link.length-1 ?
                    <><Link href={l.href} target={'_blank'} >{l.name}</Link>{' | '}</> :
                    <Link href={l.href} target={'_blank'} >{l.name}</Link>
                  ))}
                  </Box>
                )
              }
            </Box>
            </Container>
          </Section>
        )
      )
    }
    </>
  )
};

export default Post
