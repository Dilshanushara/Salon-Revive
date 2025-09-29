// Unified theme configuration for consistent styling
export const theme = {
  colors: {
    primary: "#b9a87a",
    background: {
      main: "#f8f9fa",
      secondary: "#f3e9d2",
      white: "#ffffff",
      cardOverlay: "rgba(255,255,255,0.88)"
    },
    text: {
      primary: "#222",
      secondary: "#4d3a00",
      muted: "#6c757d",
      accent: "#7a6a2f"
    }
  },
  
  spacing: {
    section: "4rem 0",
    sectionMobile: "2rem 0",
    container: "2.7rem 2.2rem",
    containerMobile: "1.5rem 1rem",
    grid: "2rem",
    gridMobile: "1rem"
  },
  
  borderRadius: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    circle: "50%"
  },
  
  shadows: {
    light: "0 2px 12px rgba(185,168,122,0.08)",
    medium: "0 4px 24px rgba(185,168,122,0.14)",
    heavy: "0 8px 38px rgba(185,168,122,0.18)",
    hover: "0 14px 40px rgba(185,168,122,0.25)"
  },
  
  transitions: {
    fast: "0.2s ease-out",
    medium: "0.3s cubic-bezier(.4,2,.3,1)",
    slow: "0.4s cubic-bezier(.4,2,.3,1)"
  },
  
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: {
      heading: "2.5rem",
      subheading: "1.2rem",
      body: "1.07rem",
      small: "0.9rem"
    },
    fontWeight: {
      normal: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  breakpoints: {
    mobile: "575px",
    tablet: "768px",
    desktop: "1024px",
    large: "1200px"
  }
};

// Helper function to create consistent background gradients
export const createGradient = (direction = "120deg") => 
  `linear-gradient(${direction}, ${theme.colors.background.main} 60%, ${theme.colors.background.secondary} 100%)`;

// Helper function for consistent section styling
export const sectionStyle = {
  background: createGradient(),
  width: "100vw",
  marginLeft: "calc(-50vw + 50%)",
  padding: theme.spacing.section,
  overflow: "hidden"
};

// Helper function for consistent container styling
export const containerStyle = {
  maxWidth: "1250px",
  margin: "0 auto",
  borderRadius: theme.borderRadius.large,
  background: theme.colors.background.cardOverlay,
  boxShadow: theme.shadows.light,
  padding: theme.spacing.container
};