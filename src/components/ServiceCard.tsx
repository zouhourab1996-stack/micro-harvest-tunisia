import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, price, rating, reviews, image, link }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="ml-1 font-semibold text-foreground">{rating}</span>
          </div>
          <span className="text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Starting at</span>
            <p className="text-2xl font-bold text-primary">${price}</p>
          </div>
          <Link to={link}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
