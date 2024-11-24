
export const store2 = defineStore('store2', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        count: 0,
        name: 'Eduardo',
        isAdmin: true,
        items: [],
        hasChanged: true,
      } as any
    },
  })