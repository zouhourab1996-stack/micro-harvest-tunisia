import { Progress } from "@/components/ui/progress";
import farmElements from "@/assets/farm-elements.jpg";

const FundAllocation = () => {
  const allocations = [
    { category: "Artesian Well Drilling", amount: "€40,000", percentage: 27, description: "Deep water source for sustainable irrigation" },
    { category: "Protective Fencing", amount: "€25,000", percentage: 17, description: "Secure 10 hectares of farmland" },
    { category: "Poultry House Construction", amount: "€35,000", percentage: 23, description: "Modern chicken farming facilities" },
    { category: "Livestock & Initial Feed", amount: "€30,000", percentage: 20, description: "Cows, sheep, and starting supplies" },
    { category: "Fruit Trees & Planting", amount: "€15,000", percentage: 10, description: "Olive, almond, pomegranate, and fig trees" },
    { category: "Operations & Maintenance", amount: "€5,000", percentage: 3, description: "First year operational costs" }
  ];

  const totalAmount = "€150,000";

  return (
    <section id="funds" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Your Donation Will Be Used
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full transparency is our commitment. Here's exactly how every euro will be invested 
            to build a sustainable farm that benefits the entire Kasserine community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {allocations.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{item.category}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-bold text-primary text-lg">{item.amount}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Total Goal:</span>
                <span className="text-3xl font-bold text-primary">{totalAmount}</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img 
              src={farmElements} 
              alt="Farm development elements including well, fence, poultry house, livestock, and fruit trees"
              className="rounded-2xl shadow-elevated w-full"
            />
            <div className="mt-6 bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h3 className="font-bold text-foreground mb-3 text-center">100% Transparency Guarantee</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Every expense will be documented and shared with our supporters. You'll receive regular updates 
                on the project's progress, including photos, videos, and financial reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundAllocation;
