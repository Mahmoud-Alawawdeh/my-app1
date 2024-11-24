
export const store3 = defineStore('store3', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        count: 0,
        name: 'Eduardo',
        isAdmin: true,
        items: [],
        hasChanged: true,
        
      }
    },
  })