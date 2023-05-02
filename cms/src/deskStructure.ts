export const myStructure = (S: {
  list: () => {
    (): any
    new (): any
    title: {
      (arg0: string): {(): any; new (): any; items: {(arg0: any[]): any; new (): any}}
      new (): any
    }
  }
  listItem: () => {
    (): any
    new (): any
    title: {
      (arg0: string): {(): any; new (): any; child: {(arg0: any): any; new (): any}}
      new (): any
    }
  }
  document: () => {
    (): any
    new (): any
    title: {
      (arg0: string): {
        (): any
        new (): any
        schemaType: {
          (arg0: string): {(): any; new (): any; documentId: {(arg0: string): any; new (): any}}
          new (): any
        }
      }
      new (): any
    }
  }
  documentTypeListItems: () => any[]
}) => {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().title('Settings').schemaType('settings').documentId('settings')),
      S.listItem()
        .title('One Pager')
        .child(
          S.document().title('One Page Content').schemaType('onePager').documentId('onePager')
        ),
      ...S.documentTypeListItems().filter(
        (listItem: {getId: () => string}) => !['onePager', 'settings'].includes(listItem.getId())
      ),
    ])
}
