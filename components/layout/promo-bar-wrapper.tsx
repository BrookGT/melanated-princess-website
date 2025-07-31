"use client";
import { useState } from "react";
import PromoBar from "@/components/layout/promo-bar";

export default function PromoBarWrapper() {
    const [promoVisible, setPromoVisible] = useState(true);

    return (
        <>
            <PromoBar
                isVisible={promoVisible}
                onClose={() => setPromoVisible(false)}
            />
            {!promoVisible && (
                <div className="bg-white w-full h-14 lg:h-20">
                    {/* Responsive placeholder: 56px for mobile, 80px for large screens */}
                </div>
            )}
        </>
    );
}
