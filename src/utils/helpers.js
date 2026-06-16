export const formatDate = (
  dateString
) => {
  const date =
    new Date(dateString);

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
};

export const calculateAttendance =
  (
    totalDays,
    presentDays
  ) => {
    if (totalDays === 0) {
      return "0%";
    }

    return `${Math.round(
      (presentDays /
        totalDays) *
        100
    )}%`;
  };

export const getCertificateBadge =
  (
    certificate
  ) => {
    switch (
      certificate
    ) {
      case "A":
        return "🟢 A Certificate";

      case "B":
        return "🟡 B Certificate";

      case "C":
        return "🔴 C Certificate";

      default:
        return "No Certificate";
    }
  };

export const capitalizeText =
  (text) => {
    return (
      text
        .charAt(0)
        .toUpperCase() +
      text
        .slice(1)
        .toLowerCase()
    );
  };



// Closure Example
export function createCampCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}



// Pure Function
export function calculateCampHours(
  days
) {
  return days * 24;
}



// Functional Programming
export const formatCampName =
  (camp) =>
    `🏕 ${camp}`;

export const getCampActivities =
  (
    camp
  ) =>
    camp.activities.join(
      ", "
    );



// Rest Operator
export function totalDays(
  ...days
) {
  return days.reduce(
    (sum, day) =>
      sum + day,
    0
  );
}



/*
TypeScript Style Object

Camp = {
 id: number,
 wing: string,
 name: string,
 location: string,
 duration: string,
 reportingTime: string,
 uniform: string,
 activities: string[]
}
*/