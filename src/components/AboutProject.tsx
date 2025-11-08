import { Heart, Users, Trophy, Shield } from "lucide-react";

const AboutProject = () => {
  const features = [
    {
      icon: Shield,
      title: "Decorated Police Detective",
      description: "Bruce served with distinction in the Boston Police Department Gang Unit, beloved by all who knew him"
    },
    {
      icon: Trophy,
      title: "Gifted Athlete & Coach",
      description: "Record-setting college basketball player who impacted countless children as a coach in multiple sports"
    },
    {
      icon: Heart,
      title: "Devoted Family Man",
      description: "A loving husband to Lori and father to Maddie and Ryan who fought cancer courageously for 6 years"
    },
    {
      icon: Users,
      title: "One of a Kind Friend",
      description: "To know Bruce was to love him - the type of friend you only get once in a lifetime"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Remembering Bruce Higgins
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            On November 2, 2025, we lost a cherished member of our community. Bruce Higgins lost a courageous 6-year battle with cancer that he fought silently and bravely. His sudden passing left his soulmate Lori and his two amazing children, Maddie and Ryan, to navigate this new reality without their incredible husband and father.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300 border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-accent/10 rounded-xl p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            How You Can Help
          </h3>
          <p className="text-muted-foreground leading-relaxed text-center">
            Since Bruce's passing, there has been an amazing outpouring of support and love for Lori, Maddie, and Ryan. Many have asked "what can we do to help?" While nothing will relieve their pain, your donation will show the love and appreciation we all have for a man who touched so many lives in a positive and impactful way in only 51 short years. Your contribution will help ease the financial burden the family now faces in Bruce's absence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
