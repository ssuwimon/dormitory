

interface ObjectProps {
    backgroundColor : string,
    color:string,
    border ?: string
}

interface TypeProps {
    [key:string] : ObjectProps
}

export const color:TypeProps = {
    PRIMARY : {
      'backgroundColor' : "#548",
      'color': "#fff"
    },
    CREATE : {
        'backgroundColor' : "#007AFF",
        'color': "#fff",
        'border': "#007AFF"
    },
    DELETE : {
        'backgroundColor' : "#ea3d2f",
        'color': "#fff"
    }
  
}


